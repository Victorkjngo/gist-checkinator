import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistEntryViewComponent } from './gist-entry-view.component';

describe('GistEntryViewComponent', () => {
  let component: GistEntryViewComponent;
  let fixture: ComponentFixture<GistEntryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistEntryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistEntryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
