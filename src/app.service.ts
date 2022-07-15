import { Injectable } from '@nestjs/common';
import { boundClass } from "autobind-decorator";

@boundClass
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
