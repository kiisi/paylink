import { cn } from "~/lib/utils";

export const NotificationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M15 4.25C10.7198 4.25 7.25004 7.71979 7.25004 12V12.7041C7.25004 13.401 7.04375 14.0824 6.65717 14.6622L5.50856 16.3851C4.17547 18.3848 5.19318 21.1028 7.51177 21.7351C8.26738 21.9412 9.02937 22.1155 9.79578 22.2581L9.79768 22.2632C10.5667 24.3151 12.622 25.75 15 25.75C17.378 25.75 19.4333 24.3151 20.2023 22.2632L20.2042 22.2581C20.9706 22.1155 21.7327 21.9412 22.4883 21.7351C24.8069 21.1028 25.8246 18.3848 24.4915 16.3851L23.3429 14.6622C22.9563 14.0824 22.75 13.401 22.75 12.7041V12C22.75 7.71979 19.2802 4.25 15 4.25ZM18.3764 22.537C16.1335 22.805 13.8664 22.8049 11.6235 22.5369C12.3344 23.5585 13.571 24.25 15 24.25C16.4289 24.25 17.6655 23.5585 18.3764 22.537ZM8.75004 12C8.75004 8.54822 11.5483 5.75 15 5.75C18.4518 5.75 21.25 8.54822 21.25 12V12.7041C21.25 13.6972 21.544 14.668 22.0948 15.4943L23.2434 17.2172C24.0086 18.3649 23.4245 19.925 22.0936 20.288C17.4494 21.5546 12.5507 21.5546 7.90644 20.288C6.57561 19.925 5.99147 18.3649 6.75664 17.2172L7.90524 15.4943C8.45609 14.668 8.75004 13.6972 8.75004 12.7041V12Z" fill="#141517" />
    </svg>
);

export const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg className={cn("shrink-0", className)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M12.6668 5.6665L8.00016 10.3332L3.3335 5.6665" stroke="#141517" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export const MenuIcon = ({ className }: { className?: string }) => (
    <svg className={cn("shrink-0", className)} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M21.4668 9.3335L6.53346 9.3335" stroke="#414141" strokeWidth="2" strokeLinecap="round"/>
<path d="M21.4668 14.9331L6.53346 14.9331" stroke="#414141" strokeWidth="2" strokeLinecap="round"/>
<path d="M21.4668 20.5332L6.53346 20.5332" stroke="#414141" strokeWidth="2" strokeLinecap="round"/>
</svg>
);