import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "../services/user.service";
import { TokenService } from "../services/token.service";

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree => {
    const userService = inject(UserService);
    const router = inject(Router);

    if (userService.estaLogado()) {
        return true;
    }

    router.navigateByUrl('/login');
    return false;
}