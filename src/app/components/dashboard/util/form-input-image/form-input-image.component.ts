import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PosterImage} from '../../../../shared/model/poster-image';

@Component({
  selector: 'app-form-input-image',
  templateUrl: './form-input-image.component.html',
  styleUrls: ['./form-input-image.component.css']
})
export class FormInputImageComponent {

  imageFile: File;
  private innerValue: any;
  private changed = new Array<(value: any) => void>();
  private touched = new Array<() => void>();

  @Input() name: string;
  @Input() posterImage: PosterImage;
  @Output() onFileChangeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.imageFile = event.target.files[0];
      this.posterImage.name = this.imageFile.name;
      this.posterImage.size = this.imageFile.size;
      this.onFileChangeEvent.emit(event);
      reader.onload = (evente: ProgressEvent) => {
        this.posterImage.url = (<FileReader>evente.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
