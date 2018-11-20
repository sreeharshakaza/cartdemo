import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductListComponentComponent } from './productlist.component';

describe('ProductListComponentComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductListComponentComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductListComponentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shoppingcart'`, () => {
    const fixture = TestBed.createComponent(ProductListComponentComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('shoppingcart');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ProductListComponentComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to shoppingcart!');
  });
});
