import { StateManagerObject } from '@src/app/core/models';
import { Insurance, Kind, SelectObject } from '../models';
import { UtilitiesService } from './utilities.service';

describe('UtilitiesService', () => {
  let service: UtilitiesService;
  const mockedInsuranceArray: StateManagerObject[] = [
    {
      data: {
        id: '1',
        name: 'Casa mia!',
        brand: 'Generali',
        'brand-image': 'brand_generali.png',
        kind: 'Hogar',
        'Kind-image': 'kind_home.png',
        price: '300',
      },
      key: '0',
    },
  ];

  const mockedInsurance: Insurance = {
    id: '1',
    name: 'Casa mia!',
    brand: 'Generali',
    'brand-image': 'brand_generali.png',
    brandImage: 'assets/icons/brand_generali.png',
    kind: 'Hogar',
    'Kind-image': 'kind_home.png',
    kindImage: 'assets/icons/kind_home.png',
    price: '300',
    key: '0',
  };

  beforeEach(() => {
    service = new UtilitiesService();
  });

  it('should should format a StateManagerObject array as an Insurance array, formatInsurances(insurances: StateManagerObject[])', () => {
    const expectedResult: Insurance[] = [mockedInsurance];
    const result = service.formatInsurances(mockedInsuranceArray);
    expect(result).toEqual(expectedResult);
  });

  it('should should format a StateManagerObject array as a Kind array, formatKinds(insurances: StateManagerObject[])', () => {
    const expectedResult: Kind[] = [
      {
        kind: 'None',
        kindImage: '',
      },
      {
        kind: 'Hogar',
        kindImage: 'assets/icons/kind_home.png',
      },
    ];
    const result = service.formatKinds(mockedInsuranceArray);
    expect(result).toEqual(expectedResult);
  });

  it('should should format a value and a viewValue as a SelectObject, formatSelectObject(value: any, viewValue: string)', () => {
    const expectedResult: SelectObject = {
      value: 'Hogar',
      viewValue: 'assets/icons/kind_home.png',
    };
    const result = service.formatSelectObject('Hogar', 'assets/icons/kind_home.png');
    expect(result).toEqual(expectedResult);
  });

  it('should check that every value inside an array is included inside an object property at least once, searchElementInArray(object: Insurance, value: string[])', () => {
    const result = service.searchElementInArray(mockedInsurance, ['Hogar', 'Casa Mia']);
    expect(result).toEqual(true);

    const badResult = service.searchElementInArray(mockedInsurance, ['testing bad result', 'Casa Mia']);
    expect(badResult).toEqual(false);
  });
});
