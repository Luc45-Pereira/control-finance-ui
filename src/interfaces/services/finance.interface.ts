import { CategoryEntity } from "./category.interface";

interface Finance {
    name: string;
    description?: string;
    categoryId: number;
    walletId: number;
    isPaid: boolean;
    type: 'INCOME' | 'EXPENSE'
}
export interface FinanceDto extends Finance {
    paid: string;
    money: string;
}
export interface FinanceEntity extends Finance {
    id: number;
    paidAt: string;
    value: number;
    createdAt: string;
    updatedAt?: string;
}

export interface FinancesBalanceEntity extends FinanceEntity {
    category: CategoryEntity | undefined;
}

export interface FinanceBalance {
    total: number;
    totalIncome: number;
    totalExpense: number;
    finances: FinancesBalanceEntity[];
}

export interface FinanceBalancePerCategory {
    category: CategoryEntity | undefined;
    total: number;
}