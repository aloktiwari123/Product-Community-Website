package com.nagarro.exittest.services;

import java.util.List;

import com.nagarro.exittest.models.Comment;
import com.nagarro.exittest.models.Question;

public interface CommentService {

	Comment createComment(Comment comment, Long questionId);	
	List<Comment> getAllCommentsOfQuestion(Long questionId);
	List<Question> getQuestionsByProductID(Long productId);
		
}
