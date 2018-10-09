import { FilmCategoryModule } from './film-category.module';

describe('FilmCategoryModule', () => {
  let filmCategoryModule: FilmCategoryModule;

  beforeEach(() => {
    filmCategoryModule = new FilmCategoryModule();
  });

  it('should create an instance', () => {
    expect(filmCategoryModule).toBeTruthy();
  });
});
