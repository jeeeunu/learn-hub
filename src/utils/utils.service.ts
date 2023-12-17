import { Injectable } from '@nestjs/common';
import * as moment from 'moment-timezone';

@Injectable()
export class UtilsService {
  /**
   * @param zone 기준 위치
   * @param format 출력 포맷
   * @returns 날짜 및 시간
   */
  static getDate(zone = 'Asia/Seoul', format = 'YYYY-MM-DD HH:mm:ss') {
    if (zone == 'utc') {
      return moment().utc().format(format);
    }
    return moment().tz(zone).format(format);
  }
}
