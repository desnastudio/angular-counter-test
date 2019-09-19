import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserModule, By} from '@angular/platform-browser';
import {CounterComponent} from './counter.component';
import {CounterNumbersComponent} from '../../components/counter-numbers/counter-numbers.component';
import {AppComponent} from '../../app.component';
import {AppRoutingModule} from '../../app-routing.module';
import {RootStoreModule} from '../../root-store';


describe('Counter component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CounterComponent,
        CounterNumbersComponent,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        RootStoreModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call startCounter callback when button clicked', () => {
    // Given
    spyOn(component, 'startCounting');

    // When
    clickByCSS('#startButton');

    // Than
    expect(component.startCounting).toHaveBeenCalled();
  });

  function clickByCSS(selector: string) {
    const debugElement = fixture.debugElement.query(By.css(selector));
    debugElement.nativeElement.click();
    fixture.detectChanges();
  }
});
