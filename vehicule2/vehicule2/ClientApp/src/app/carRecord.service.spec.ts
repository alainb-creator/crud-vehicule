import { TestBed } from '@angular/core/testing';

import { CarRecordService } from './carRecord.service';

describe('CarRecordService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CarRecordService = TestBed.get(CarRecordService);
        expect(service).toBeTruthy();
    });
});
