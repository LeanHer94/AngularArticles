export interface MenuItem {
    icon: string;
    description: string;
    enabled: boolean;
    
    trigger();
}