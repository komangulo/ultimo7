import React, { useState, useEffect } from 'react';
import Comment, { CommentType } from './Comment';
import CommentForm from './CommentForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { v4 as uuidv4 } from 'uuid';

interface CommentSectionProps {
  pageId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ pageId }) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  
  // Load comments from localStorage on mount
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments-${pageId}`);
    if (storedComments) {
      try {
        // Parse the stored comments and convert string dates back to Date objects
        const parsedComments = JSON.parse(storedComments).map((comment: any) => ({
          ...comment,
          createdAt: new Date(comment.createdAt)
        }));
        setComments(parsedComments);
      } catch (error) {
        console.error('Error parsing stored comments:', error);
      }
    }
  }, [pageId]);
  
  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`comments-${pageId}`, JSON.stringify(comments));
  }, [comments, pageId]);
  
  const handleSubmitComment = (author: string, content: string) => {
    const newComment: CommentType = {
      id: uuidv4(),
      author,
      content,
      createdAt: new Date(),
    };
    
    setComments(prevComments => [newComment, ...prevComments]);
  };
  
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Comentarios</CardTitle>
      </CardHeader>
      <CardContent>
        <CommentForm onSubmit={handleSubmitComment} />
        
        <div className="mt-8">
          {comments.length > 0 ? (
            <div className="space-y-2">
              {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </div>
          ) : (
            <Alert className="bg-gray-50 dark:bg-gray-800 border">
              <AlertDescription>
                No hay comentarios todavía. ¡Sé el primero en comentar!
              </AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentSection;
