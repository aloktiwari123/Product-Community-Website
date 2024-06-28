package com.nagarro.exittest.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.exittest.models.Question;
import com.nagarro.exittest.repository.QuestionRepository;
import com.nagarro.exittest.services.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionRepository questionRepo;
	
	@Override
	public Question createQuestion(Question question) {
		
		this.questionRepo.save(question);
		return question;
	}

	@Override
	public Optional<Question> getQuestionById(Long questionId) {
		
		Optional<Question> question = this.questionRepo.findById(questionId);
		return question;
	}

	@Override
	public List<Question> getAllQuestions() {
		List<Question> allQuestions = this.questionRepo.findAll();
		return allQuestions;
	}

	
}
