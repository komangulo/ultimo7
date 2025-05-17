
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export interface CommentType {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
  avatarUrl?: string;
}

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const initials = comment.author
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <Avatar className="h-10 w-10">
        {comment.avatarUrl && <AvatarImage src={comment.avatarUrl} alt={comment.author} />}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-medium">{comment.author}</h4>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatDistanceToNow(comment.createdAt, { addSuffix: true, locale: es })}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
      </div>
    </div>
  );
};

export default Comment;
