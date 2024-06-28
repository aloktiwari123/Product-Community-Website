package com.nagarro.exittest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nagarro.exittest.models.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>{

	List<Question> findByProductID(Long productId);

}
