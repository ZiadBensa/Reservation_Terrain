package com.gestion.reservation_terrain.service;

import com.gestion.reservation_terrain.dto.UserDto;
import com.gestion.reservation_terrain.model.Client;
import com.gestion.reservation_terrain.model.ProprietaireTerrain;
import com.gestion.reservation_terrain.model.User;
import com.gestion.reservation_terrain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Iterable<User> getUsers(){
        return userRepository.findAll();
    }

    public Optional<User> getUser(UUID uuid){
        return userRepository.findById(uuid);
    }

    public void deleteUser(User user){
        userRepository.delete(user);
    }

    public void deleteUser(UUID uuid){
        userRepository.deleteById(uuid);
    }

    public Iterable<User> getUsersByName(String nom){
        return userRepository.findByNomContaining(nom);
    }

    public User getUserByEmailAndPassword(String email, String password) {
        System.out.println("email mmmmm: "+email);
        return userRepository.findByEmailAndPassword(email, password);
    }

    /*public Iterable<UserDto> getallWithDiscriminator() {
        return userRepository.findAllWithDiscriminator();
    }*/
    public List<Object[]> getAllUsersWithDiscriminator() {
        return userRepository.findAllUsersWithDiscriminator();
    }

    public User saveUser(UserDto userDto) {
        User user;
        
        if ("client".equals(userDto.getRole())) {
            user = new Client(userDto.getNom(), userDto.getPrenom(), userDto.getEmail(), 
                            userDto.getTelephone(), userDto.getPassword());
        } else if ("proprietaireTerrain".equals(userDto.getRole())) {
            user = new ProprietaireTerrain(userDto.getNom(), userDto.getPrenom(), userDto.getEmail(), 
                                         userDto.getTelephone(), userDto.getPassword(), 
                                         userDto.getCin(), userDto.getAdresse());
        } else {
            throw new IllegalArgumentException("Invalid role: " + userDto.getRole());
        }
        
        return userRepository.save(user);
    }

}
