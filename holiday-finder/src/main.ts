import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'https://portfolio-website-frontend-ytg7.onrender.com',
      'https://razvansale.dev',
    ],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Holiday Finder')
    .setDescription('The Holiday Finder definition')
    .setVersion('1.0')
    .addTag('Holiday Finder')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
        description: 'Enter your API key',
      },
      'api-key',
    )
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
