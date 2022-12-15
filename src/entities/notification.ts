export interface INotification {
    recipientId: string;
    content : string;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notifications {
    private props: INotification;
    
    constructor(props: INotification) {
        this.props = props;
    }
    
    public get recipientId():string {
        return this.props.recipientId;
    }
    
    public set recipientId(recipientId : string) {
            this.props.recipientId = recipientId;
    }
    
    public get category():string {
        return this.props.category;
    }
    
    public set category(category : string) {
        this.props.category = category;
    }
    
    public set content(content : string) {
        if(content.length < 6) {
            throw new Error("Content must be at least 6 character long");
        }
        this.props.content = content;
    }
    
    public get content():string {
        return this.props.content;
    }
    
    public get readAt():Date | null | undefined {
        return this.props.readAt;
    }
    
    public set readAt(readAt : Date | null | undefined) {
        this.props.readAt = readAt;
    }
    
    public get createdAt():Date { 
        return this.props.createdAt;
    }
} 
