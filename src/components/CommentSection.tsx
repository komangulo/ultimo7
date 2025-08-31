import React from 'react';
import CommentForm from './CommentForm';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CommentSection: React.FC = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Contáctame</CardTitle>
      </CardHeader>
      <CardContent>
        <CommentForm />
      </CardContent>
    </Card>
  );
};

export default CommentSection;
