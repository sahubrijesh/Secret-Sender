import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import mongoose from "mongoose";

export async function DELETE(request:Request, {params} : {params:{messageid:string}}) {
    await dbConnect();

    const messageid = params.messageid;

    const session = await getServerSession(authOptions);

    const user: User = session?.user as User;

    if (!session || !session.user) { 
        return Response.json(
            {
                success: false,
                message: "Not authenticated",
            },
            { status: 401 }
        );
    }

    try {
        const updateResult = await UserModel.updateOne(
            {_id: user._id},
            {$pull: {messages: {_id: messageid}}}
        )
        if(updateResult.modifiedCount === 0) {
            return Response.json(
                {
                    success: false,
                    message: "Failed to delete message",
                },
                { status: 500 }
            );
        }

        return Response.json(
            {
                success: true,
                message: "Message deleted",
            },
            { status: 200 }
        );
    } catch (error) {

        console.log("Error deleting message", error);
        
    }

}