import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss']
})
export class ModalFeedbackComponent implements OnInit {

  @Output() closeModal = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeModal.emit();
  }

}
