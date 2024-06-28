package com.nagarro.exittest.services;

import java.util.List;
import java.util.Optional;

import com.nagarro.exittest.models.Question;

public interface QuestionService {

	Question createQuestion(Question question);
	Optional<Question> getQuestionById(Long questionId);
	List<Question> getAllQuestions();
		
}
