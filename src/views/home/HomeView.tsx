import { useCallback, useEffect, useState } from "react";
import { DepositItem } from "../../components/specific/DepositItem";
import { LoadingSetLoadingScreen, useLoadingContext } from "../../context/LoadingContext";
import { NavigationSetUserNavigation, useNavigationContext } from "../../context/NavigationContext";
import { useSession } from "../../context/SessionContext";
import { DepositAmountModelArray, DepositModelArray } from "../../models/deposit.model";
import DepositRepository from "../../repositories/deposit.repository";
import TransactionRepository from "../../repositories/transaction.repository";

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
            {/* Begin of Component */}
            <div className="border-solid rounded-md border-2 border-slate-400 w-3/4 mx-auto px-2 py-4 flex flex-col gap-4">
                <div className="w-full flex justify-between">
                    <div>ganztägig</div>
                    <div>
                        <input type="checkbox" />
                    </div>
                </div>
                <div className="w-full flex justify-between">
                    <div>Datum</div>
                    <div>Uhrzeit</div>
                </div>
                <div className="w-full flex justify-between">
                    <div>Datum</div>
                    <div>Uhrzeit</div>
                </div>
                <div className="w-full">
                    <div className="w-full">einmalig</div>
                </div>
            </div>
        </div>
    );
}
