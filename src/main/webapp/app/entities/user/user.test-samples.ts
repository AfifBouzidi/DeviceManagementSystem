import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 5788,
  login: "TX@wkZ\\RYqQruN\\'g6rxj\\sCQ\\CCchI\\ZrP7w",
};

export const sampleWithPartialData: IUser = {
  id: 8069,
  login: 'P08L@r\\%m\\4i\\9jiB\\%p33NGy',
};

export const sampleWithFullData: IUser = {
  id: 19226,
  login: 'M',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
