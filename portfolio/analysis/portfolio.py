import pandas as pd
from riskmodel import SimpleRiskModel


class Portfolio:
    def __init__(self, name):
        self.name = name
        self.position = self.load_position()

    def load_position(self):
        position = pd.read_csv("./position/{}.csv".format(self.name))
        return position

    def load_price(self):
        price = pd.read_csv("./nyse/prices-split-adjusted.csv").loc[:, ["date", "symbol", "close"]]
        return price

    def update_pnl_return_weight(self):
        price = self.load_price()
        df = pd.merge(self.position, price, on="symbol", how="left")
        df["mv"] = df["shares"] * df["close"]
        df["gmv"] = abs(df["mv"])
        df_group = df.groupby("date")["mv", "gmv"].sum().reset_index()
        df_group.rename(columns={"mv": "mv_total", "gmv": "gmv_total"}, inplace=True)

        df_group["pnl"] = df_group["mv_total"].diff()
        df_group["return"] = df_group["mv_total"].pct_change()
        df_group.to_csv("./pnl_return/{}.csv".format(self.name), index=False)

        df_weight = pd.merge(df, df_group, on="date")
        df_weight["weight"] = df_weight["mv"] / df_weight["gmv_total"]

        df_weight = df_weight.loc[:, ["date", "symbol", "weight"]]
        df_weight.to_csv("./weight/{}.csv".format(self.name), index=False)

    def calculate_factor_exposure(self, date):
        weight_total = self.load_weight()
        weight = weight_total.loc[weight_total["date"] == date.strftime("%Y-%m-%d")]
        rm = SimpleRiskModel(date)
        stock_exposures = rm.exposures.loc[weight["symbol"].tolist()]
        factor_exposure = weight["weight"].values * stock_exposures.values
        return factor_exposure

    def load_weight(self):
        weight = pd.read_csv("./weight/{}.csv".format(self.name), index=False)
        return weight


if __name__ == "__main__":
    port = Portfolio("pm_1")
    port.update_pnl_return_weight()


