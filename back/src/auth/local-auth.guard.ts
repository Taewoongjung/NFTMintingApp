import {Injectable} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    async canActivate(context): Promise<boolean> {
        console.log("LocalAuthGuard passed", context.switchToHttp().getRequest());
        const can = await super.canActivate(context);
        console.log("can = ", can);
        if (can) {
            const request = context.switchToHttp().getRequest();
            console.log('login for cookie');
            await super.logIn(request);
        }
        return true;
    }
}
