import { INestApplication } from '@nestjs/common';
import { TestingModule } from '@nestjs/testing/testing-module';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { TestAppModule } from '../../modules/test-app.module';
import { ShapeDimensions, ShapeUnits } from '@image-service/api-business';

const testId = 'API-c061ff54-9c85-4839-a95b-d5f5f5d4557f';

describe(`[${testId}] /api/image`, () => {
  //#region Properties
  let app: INestApplication;
  let moduleRef: TestingModule;
  //#endregion

  //#region Life cycle hooks

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [TestAppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  //#endregion

  //#region Tests
  describe('GET /api/image', () => {
    it('should return 400 if size is smaller than 1', async () => {
      const httpClient = app.getHttpServer();
      const httpResponse = await request(httpClient)
        .get(
          `/api/shape?source=myshape&options[frame][size]=0&options[frame][dimension]=WIDTH&options[frame][unit]=PIXEL&signature=xT7C%2FMOWgA2758BH%2B3XEFvQiKAoUaqdvSCHPenYjQq4%3D`
        )
        .expect(200);

      // expect(httpResponse.status).toBe(200);
    });

    // it('should return 400 if dimension is not WIDTH or HEIGHT', async () => {
    // });

    // it('should return 400 if unit is not PIXEL or PERCENTAGE', async () => {
    // });

    // it('should return error if the signature is invalid', async () => {
    // });

    // it('should return NOT_FOUND status code if image is not found', async () => {
    // });
  });
  //#endregion
});
