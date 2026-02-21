import { CheckCircle2, CircleAlert } from "lucide-react"

export const ErrorFeedback = ({ message }: { message: string }) => {
    return (
        <div className="flex gap-2 min-h-[60px] w-full rounded-[8px] border-red border-1 p-2">
            <div className="pt-[2px]">
                <CircleAlert className="h-5 w-5 text-red" />
            </div>
            <div>
                <h2 className="text-red font-medium text-[14.5px]">Error!</h2>
                <p className="text-red text-[13.5px]">{message}</p>
            </div>
        </div>
    )
}

export const SuccessFeedback = ({ message }: { message: string }) => {
    return (
        <div className="flex gap-2 min-h-[60px] w-full rounded-[8px] border-green-500 border-1 p-2">
            <div className="pt-[2px]">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div>
                <h2 className="text-green-500 font-medium text-[14.5px]">Success!</h2>
                <p className="text-green-500 text-[13.5px]">{message}</p>
            </div>
        </div>
    )
}