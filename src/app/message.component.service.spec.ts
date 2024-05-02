import { TestBed } from '@angular/core/testing';

import { Message.ComponentService } from './message.component.service';

describe('Message.ComponentService', () => {
  let service: Message.ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Message.ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
