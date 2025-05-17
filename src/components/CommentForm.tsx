
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageSquare } from "lucide-react";

interface CommentFormProps {
  onSubmit: (author: string, content: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!author.trim() || !content.trim()) return;
    
    setIsSubmitting(true);
    
    // Submit the comment
    onSubmit(author, content);
    
    // Reset form
    setContent('');
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Tu nombre"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="comment">Comentario</Label>
        <Textarea
          id="comment"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
          rows={4}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        disabled={isSubmitting || !author.trim() || !content.trim()}
        className="bg-[#a51c30] hover:bg-[#8a1728] text-white"
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        Publicar comentario
      </Button>
    </form>
  );
};

export default CommentForm;
