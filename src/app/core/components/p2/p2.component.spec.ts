import { TestBed, async } from '@angular/core/testing';
import { P2Component } from './p2.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        P2Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(P2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testWork'`, () => {
    const fixture = TestBed.createComponent(P2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testWork');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(P2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('testWork app is running!');
  });
});
