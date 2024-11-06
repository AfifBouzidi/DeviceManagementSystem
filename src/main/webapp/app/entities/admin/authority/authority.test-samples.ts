import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '30f43184-a3cb-4876-baef-7b5605add450',
};

export const sampleWithPartialData: IAuthority = {
  name: '26a76997-24cf-4e1e-bd7a-f6366ec0fbc5',
};

export const sampleWithFullData: IAuthority = {
  name: 'ca265af4-c274-4ea0-a5da-427831d1a1b6',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
