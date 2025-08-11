import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorsService } from './administrators.servicie';


describe('AdministratorsServiceService', () => {
  let service: AdministratorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministratorsService],
    }).compile();

    service = module.get<AdministratorsService>(AdministratorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
