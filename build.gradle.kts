plugins {
    id("java")
    id("com.github.johnrengelman.shadow") version "8.1.1"
}

group = "com.ssnagin"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.10.0"))
    testImplementation("org.junit.jupiter:junit-jupiter")

    implementation(fileTree("lib") { include("*.jar") })

    compileOnly("org.projectlombok:lombok:1.18.38")
    annotationProcessor("org.projectlombok:lombok:1.18.38")

    testCompileOnly("org.projectlombok:lombok:1.18.38")
    testAnnotationProcessor("org.projectlombok:lombok:1.18.38")
}

//tasks.jar {
//    manifest {
//        attributes 'Main-Class': 'com.ssnagin.Main'
//
//    }
//    from {
//        configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
//    }
//    archiveFileName = 'WebServer.jar'
//    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
//}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}

tasks.test {
    useJUnitPlatform()
}

tasks.shadowJar {
    archiveFileName.set("server.jar")
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE

    manifest {
        attributes(
            "Main-Class" to "com.ssnagin.Main"
        )
    }
}
