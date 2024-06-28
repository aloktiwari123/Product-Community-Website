package com.nagarro.exittest.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.exittest.models.Comment;
import com.nagarro.exittest.models.Question;
import com.nagarro.exittest.repository.CommentRepository;
import com.nagarro.exittest.repository.QuestionRepository;
import com.nagarro.exittest.services.CommentService;

import javassist.NotFoundException;

@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	private CommentRepository commentRepo;
	
	@Autowired
	private QuestionRepository questionRepo;
	
	@Override
	public Comment createComment(Comment comment, Long questionId) {
		
		Question question = null;
		try {
			question = this.questionRepo.findById(questionId).orElseThrow(() -> new NotFoundException("not found"));
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
		comment.setQuestion(question);
		Comment addedComment = this.commentRepo.save(comment);
		return addedComment;
	}
	
	@Override
	public List<Comment> getAllCommentsOfQuestion(Long questionId) {
		Optional<Question> question = this.questionRepo.findById(questionId);
		List<Comment> comments = this.commentRepo.findByQuestion(question);
		return comments;
	}

	public List<Question> getQuestionsByProductID(Long productId) {
		// TODO Auto-generated method stub
		List<Question> question = this.questionRepo.findByProductID(productId);
		return question;
	}

}
