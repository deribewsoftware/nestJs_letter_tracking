import { Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from '../types/jwtPayload.types';
import { JwtPayloadWithRt } from '../types/jwtPayload.rt.types';
declare const RtStrategy_base: new (...args: any[]) => Strategy;
export declare class RtStrategy extends RtStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): JwtPayloadWithRt;
}
export {};
