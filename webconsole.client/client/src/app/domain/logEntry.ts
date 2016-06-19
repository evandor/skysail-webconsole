import {Bundle} from '../domain/bundle';
import {Service} from '../domain/service';

export interface LogEntry {
    time: number;
    level: string;
    message: string;
    service: Service;
    bundle: Bundle;
    exception: string;
}