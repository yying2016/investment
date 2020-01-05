import datetime
import pandas as pd
import numpy as np


class SimpleRiskModel:
    def __init__(self, date):
        self._date = date
        self._cov, self._factors = self._init_cov_matrix()
        self._exposures = self._init_exposure()

    @property
    def date(self):
        return self._date

    @property
    def cov(self):
        return self._cov

    @property
    def factors(self):
        return self._factors

    @property
    def exposures(self):
        return self._exposures

    def _init_exposure(self):
        sec_info = pd.read_csv("./nyse/securities.csv").loc[:, ["Ticker symbol", "GICS Sector"]]
        symbols = sec_info["Ticker symbol"].tolist()
        sectors = sec_info["GICS Sector"].unique()
        data = np.zeros((len(symbols), len(sectors)))
        exposures = pd.DataFrame(data, index=symbols, columns=sectors)

        for _, row in sec_info.iterrows():
            exposures.at[row["Ticker symbol"], row["GICS Sector"]] = 1
        return exposures

    def _init_cov_matrix(self):
        all_factor_return = pd.read_csv("./nyse_processed/sector-return.csv")

        end_date = self.date
        start_date = end_date - datetime.timedelta(days=90)
        factor_return = all_factor_return.loc[(all_factor_return['date'] >= start_date.strftime("%Y-%m-%d"))
                                              & (all_factor_return['date'] <= end_date.strftime("%Y-%m-%d"))]
        cov = factor_return.cov()
        return cov, cov.columns.tolist()


