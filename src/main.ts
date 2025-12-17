import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  
  app.setGlobalPrefix(process.env.PREFIX || 'api');

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('My API Storage')
    .setDescription('The API description for project')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authentication', 'Login and Registration') 
    .addTag('Profile Management', 'Everything about your own profile') 
    .addTag('Admin Management', 'Administrative tools for managers') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
