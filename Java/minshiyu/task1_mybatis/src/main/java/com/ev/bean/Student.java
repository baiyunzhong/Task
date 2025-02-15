package com.ev.bean;

public class Student {

    //createAt这种要换成驼峰命名
    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", createAt=" + createAt +
                ", updateAt=" + updateAt +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", age='" + age + '\'' +
                ", qq='" + qq + '\'' +
                ", occupation='" + occupation + '\'' +
                ", joinDate='" + joinDate + '\'' +
                ", school='" + school + '\'' +
                ", number='" + number + '\'' +
                ", dailyUrl='" + dailyUrl + '\'' +
                ", declaration='" + declaration + '\'' +
                ", consoler='" + consoler + '\'' +
                '}';
    }

    public Student() {
    }

    public Student(String name, String gender, int age, String qq, String occupation, Long joinDate, String school, String number, String dailyUrl, String declaration, String consoler) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.qq = qq;
        this.occupation = occupation;
        this.joinDate = joinDate;
        this.school = school;
        this.number = number;
        this.dailyUrl = dailyUrl;
        this.declaration = declaration;
        this.consoler = consoler;
    }

    private Long id;
    private Long createAt;
    private Long updateAt;
    private String name;
    private String gender;
    private int age;
    private String qq;
    private String occupation;
    private Long joinDate;
    private String school;
    private String number;
    private String dailyUrl;
    private String declaration;
    private String consoler;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Long createAt) {
        this.createAt = createAt;
    }

    public Long getUpdateAt() {
        return updateAt;
    }

    public void setUpdateAt(Long updateAt) {
        this.updateAt = updateAt;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public Long getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Long joinDate) {
        this.joinDate = joinDate;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getDailyUrl() {
        return dailyUrl;
    }

    public void setDailyUrl(String dailyUrl) {
        this.dailyUrl = dailyUrl;
    }

    public String getDeclaration() {
        return declaration;
    }

    public void setDeclaration(String declaration) {
        this.declaration = declaration;
    }

    public String getConsoler() {
        return consoler;
    }

    public void setConsoler(String consoler) {
        this.consoler = consoler;
    }
}
