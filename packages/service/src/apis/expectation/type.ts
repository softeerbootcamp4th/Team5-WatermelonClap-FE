export interface IApiGetCheckExpectation {
  exist: false;
}

export interface IExpectation {
  uploadDate: string;
  uid: string;
  expectation: string;
  expectationId: string;
  approved: boolean;
}
