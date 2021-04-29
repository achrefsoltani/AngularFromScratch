import { Pipe, PipeTransform } from '@angular/core';
const DEFAULT_PATH = 'tim_logo.png';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: any): string {
    if (path.trim().length) {
      return path;
    } else {
      return DEFAULT_PATH;
    }
  }

}
