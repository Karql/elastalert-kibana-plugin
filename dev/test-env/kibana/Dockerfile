FROM docker.elastic.co/kibana/kibana:8.5.3

COPY ./plugins/elastalertKibanaPlugin-8.5.3.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.5.3.zip
