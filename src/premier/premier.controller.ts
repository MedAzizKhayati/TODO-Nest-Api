import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { FusionSkillsPipe } from './pipes/fusion_skills.pipe';

@Controller()
export class PremierController {
    @Get()
    getPremier(): any{
        console.log('GET 🚗');
        return 'GET 🚗';
    }
    @Post()
    postPremier(){
        console.log('POST');
        return 'POST';
    }
    @Post('/divers/skills')
    skills(@Body('skills', FusionSkillsPipe) skills: any){
        return skills;
    }
    @Delete()
    deletePremier(){
        console.log('DELETE');
        return 'DELETE';
    }
    @Put()
    putPremier(){
        console.log('PUT');
        return 'PUT';
    }
    @Patch()
    patchPremier(){
        console.log('PATCH');
        return 'PATCH';
    }
}
