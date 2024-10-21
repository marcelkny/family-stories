import { useCallback, useEffect, useState } from "react";
import { LoadingSetLoadingScreen, useLoadingContext } from "../../context/LoadingContext";
import { NavigationSetUserNavigation, useNavigationContext } from "../../context/NavigationContext";
import { useSession } from "../../context/SessionContext";
import { DepositAmountModelArray, DepositModelArray } from "../../models/deposit.model";

export default function HomeView() {
    const [, dispatchNavInfo] = useNavigationContext();
    const [loadingContext, dispatchIsLoading] = useLoadingContext();
    const [session] = useSession();
    const [deposits, setDeposits] = useState<DepositAmountModelArray>([]);
    const [totalBalance, setTotalBalance] = useState(0);
    const reloadCallback = useCallback(async () => {
        const isLoadingPrepare = LoadingSetLoadingScreen({ isLoading: false });
        dispatchIsLoading(isLoadingPrepare);
    }, []);
    useEffect(() => {
        reloadCallback();
    }, [reloadCallback]);
    return (
        <div className="pt-4 text-white">
            <div className="border-solid rounded-md border-2 border-slate-400 w-3/4 mx-auto px-2 py-4 flex flex-col gap-4">
                <div className="w-full flex justify-between">
                    <div>ganztägig</div>
                    <div>
                        <input type="checkbox" />
                    </div>
                    
                </div>
                <div>heyho</div>
                <div>heyho</div>
                <div>heyho</div>
                <div>heyho</div>
                <div>heyho</div>
                <div>heyho</div>
            </div>
        </div>
    );
}
