package com.mutesaid.bootdemo.mapper;

import com.mutesaid.bootdemo.model.Student;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StudentMapper {

    List<Student> listStudentByQuery(@Param("type") String type,
                                     @Param("startAt") Long startAt,
                                     @Param("endAt") Long endAt);

    Student findById(Long id);

    Long saveStudent(Student stu);

    Long deleteStudent(Long id);

    Long updateStudent(Student stu);

}
