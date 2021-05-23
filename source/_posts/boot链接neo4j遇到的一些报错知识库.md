---
title: boot链接neo4j遇到的一些报错知识库
date: 2021-03-01
tag : SpringBoot
abbrlink: '6690'
---
org.springframework.data.mapping.MappingException: Error mapping Record

Caused by: org.springframework.dao.TypeMismatchDataAccessException: Could not convert "" into java.util.List<java.lang.String>; nested exception is org.neo4j.driver.exceptions.value.NotMultiValued: STRING is not iterable

Caused by: org.neo4j.driver.exceptions.value.NotMultiValued: STRING is not iterable



解决办法：将该字段类型改成Object即可。