import moment from 'moment';

export default function timestamp(time: Date):string {
  return moment(time).fromNow()
}
