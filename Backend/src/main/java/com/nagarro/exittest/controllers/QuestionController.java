package com.nagarro.exittest.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.nagarro.exittest.impl.CommentServiceImpl;
import com.nagarro.exittest.impl.QuestionServiceImpl;
import com.nagarro.exittest.models.Question;
import com.nagarro.exittest.models.Comment;

@RestController
@CrossOrigin("*")
public class QuestionController {

	@Autowired
	private QuestionServiceImpl questionService;

	@Autowired
	private CommentServiceImpl commentService;

	@PostMapping("/question")
	public ResponseEntity<Question> createQuestion(@RequestBody Question question)
	{
		Question createdQuestion = this.questionService.createQuestion(question);
		return new ResponseEntity<Question>(createdQuestion, HttpStatus.CREATED);
	}
	
	@GetMapping("/questions")
	public ResponseEntity<List<Question>> getAllQuestions()
	{
		System.out.println("API hit hui hai");
		List<Question> allQuestions = this.questionService.getAllQuestions();
		return new ResponseEntity<List<Question>>(allQuestions, HttpStatus.OK);
	}
	
	@PostMapping("/question/{questionId}/comments")
	public ResponseEntity<Comment> createComment(@RequestBody Comment comment, @PathVariable Long questionId)
	{
		Comment createdComment = this.commentService.createComment(comment, questionId);
		return new ResponseEntity<Comment>(createdComment, HttpStatus.CREATED);
	}
	
	@GetMapping("/question/{questionId}/comments")
	public ResponseEntity<List<Comment>> getCommentsOfQuestion(@PathVariable Long questionId)
	{
		List<Comment> comments = this.commentService.getAllCommentsOfQuestion(questionId);
		return new ResponseEntity<List<Comment>>(comments, HttpStatus.OK);
	}
	
	@GetMapping("/question/{productID}")
	public ResponseEntity<List<Question>> getQuestionsByProductID(@PathVariable Long productID)
	{
		List<Question> questions = this.commentService.getQuestionsByProductID(productID);
		return new ResponseEntity<List<Question>>(questions, HttpStatus.OK);
	}
}
