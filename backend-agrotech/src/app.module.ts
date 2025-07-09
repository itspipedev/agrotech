import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< Updated upstream

@Module({
  imports: [],
=======
import { TypeOrmModule } from '@nestjs/typeorm';
import { LotesModule } from './lotes/lotes.module';
import { SublotesModule } from './sublotes/sublotes.module';
import { CultivosModule } from './cultivos/cultivos.module';
import { TipoCultivoModule } from './tipo-cultivo/tipo-cultivo.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { AlmacenModule } from './almacen/almacen.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EpasModule } from './epas/epas.module';
import { TiposEpasModule } from './tipos_epas/tipos_epas.module';

@Module({
  imports:[
    UsuariosModule,
    RolesModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port:5432,
      username:'agrotech',
      password:'123',
      database:'agrotech',
      autoLoadEntities: true,
      synchronize:true,
      retryDelay:3000,
      retryAttempts:10,
    }),

    AlmacenModule,

    CategoriasModule,

    EpasModule,

    TiposEpasModule
  ],
>>>>>>> Stashed changes
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
