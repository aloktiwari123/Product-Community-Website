package com.nagarro.exittest.controllers;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.exittest.config.JwtUtils;
import com.nagarro.exittest.impl.UserDetailsServiceImpl;
import com.nagarro.exittest.impl.UserServiceImpl;
import com.nagarro.exittest.models.JwtRequest;
import com.nagarro.exittest.models.JwtResponse;
import com.nagarro.exittest.models.Role;
import com.nagarro.exittest.models.User;
import com.nagarro.exittest.models.UserRole;

@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private UserServiceImpl userService;
	
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailsServiceImpl detailsServiceImpl;

	@Autowired
	private JwtUtils jwtUtils;
	
	@PostMapping("/user/register")
	@CrossOrigin("*")
	public User register(@RequestBody User user) throws Exception {
		try {

			user.setPassword(this.passwordEncoder.encode(user.getPassword()));
			Set<UserRole> roles = new HashSet<>();
			Role role = new Role();
			if (user.getEmail().equalsIgnoreCase("aaa@gmail.com")) {
				role.setRoleId(44L);
				role.setRoleName("ADMIN");
			} else {
				role.setRoleId(45L);
				role.setRoleName("NORMAL");

			}

			UserRole userRole = new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
			roles.add(userRole);
			return this.userService.createUser(user, roles);
		} catch (Exception e) {
			throw new Exception("User with email " + user.getEmail() + " already exists!!");
		}
	}

	@PostMapping("/generate-token")
	@CrossOrigin("*")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		try {
			authenticate(jwtRequest.getUserName(), jwtRequest.getPassword());
		} catch (UsernameNotFoundException e) {
			e.printStackTrace();
			throw new Exception("User not found");
		}
		UserDetails userDetails = this.detailsServiceImpl.loadUserByUsername(jwtRequest.getUserName());
		System.out.println(userDetails);
		String s = this.jwtUtils.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(s));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("User Disable");
		} catch (BadCredentialsException e) {
			throw new Exception("Bad Credentials!!");
		}
	}

	@GetMapping("/current-user")
	@CrossOrigin("*")
	public User getCurrentUser(Principal principal) {
		System.out.println(principal.getName());
		return ((User) this.detailsServiceImpl.loadUserByUsername(principal.getName()));
	}

}
